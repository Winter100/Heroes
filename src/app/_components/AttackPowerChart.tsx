'use client';

import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ReferenceLine,
  ReferenceDot,
} from 'recharts';

// --- 상수 정의 ---
// 이 상수들은 '보스 방어력'을 기준으로 한 상대적 위치를 정의합니다.
const ATTACK_CAP_TO_DEFENSE_OFFSET = 10000;
const BREAKPOINT_OFFSETS = {
  p1: 4000, // '보스의 방어력+4000'
  p2: 22000, // '보스의 방어력+22000'
};
const SLOPES = {
  initial: 1.0, // p1 이전 기울기
  final: 0.1, // p2 이후 기울기
};
const CHART_DATA_INTERVAL = 300;
const CHART_X_AXIS_EXTENSION = 10000;

// --- 타입 정의 및 헬퍼 함수 ---
interface ChartData {
  characterAttack: number;
  appliedAttack: number;
}

interface AttackCurveChartProps {
  userAttack: number;
  bossAttackCap: number; // 이 값이 변하면 그래프 곡선 자체가 변합니다.
}

/**
 * 2차 함수 계수(a, b, c)를 사용하여 적용 공격력을 계산합니다.
 * 이 함수는 bossDefense 값에 따라 p1_x, p2_x가 달라지는
 * '동적' 곡선을 계산합니다.
 */
const calculateAppliedAttack = (
  characterAttack: number,
  bossDefense: number,
  coefficients: { a: number; b: number; c: number }
): number => {
  const { a, b, c } = coefficients;

  // 1. 변곡점 x좌표 계산
  const point1_x = bossDefense + BREAKPOINT_OFFSETS.p1;
  const point2_x = bossDefense + BREAKPOINT_OFFSETS.p2;

  // 2. 구간별 적용 공격력 반환
  // 구간 1: '보스 방어력+4000' 이전
  if (characterAttack <= point1_x) return characterAttack;

  // 구간 2: '보스 방어력+4000' ~ '보스 방어력+22000' (2차 함수)
  if (characterAttack <= point2_x)
    return a * characterAttack * characterAttack + b * characterAttack + c;

  // 구간 3: '보스 방어력+22000' 이후 (기울기 0.1 직선)
  const point2_y = a * point2_x * point2_x + b * point2_x + c;
  return point2_y + (characterAttack - point2_x) * SLOPES.final;
};

// --- 메인 차트 컴포넌트 ---
const AttackPowerChart: React.FC<AttackCurveChartProps> = ({
  userAttack,
  bossAttackCap,
}) => {
  const formatNumber = (num: number) =>
    new Intl.NumberFormat().format(Math.round(num));

  // 1. bossAttackCap(prop)에 따라 '보스 방어력'을 계산합니다.
  const bossDefense = useMemo(
    () => bossAttackCap - ATTACK_CAP_TO_DEFENSE_OFFSET,
    [bossAttackCap]
  );

  // 2. '보스 방어력'이 바뀔 때마다 변곡점 위치와 2차 함수 계수(a, b, c)를 다시 계산합니다.
  // 이것이 바로 선배님이 원하신 '동적' 곡선 로직입니다.
  const { coefficients, points } = useMemo(() => {
    // '보스 방어력' 기반으로 실제 변곡점 x좌표 계산
    const p1_x = bossDefense + BREAKPOINT_OFFSETS.p1;
    const p2_x = bossDefense + BREAKPOINT_OFFSETS.p2;

    // p1_x (기울기 1.0)와 p2_x (기울기 0.1)를 부드럽게 잇는
    // 2차 함수 계수(a, b, c)를 동적으로 계산합니다.
    const a = (SLOPES.initial - SLOPES.final) / (2 * (p1_x - p2_x));
    const b = SLOPES.initial - 2 * a * p1_x;
    // p1_x 지점에서 y=x 그래프와 만나야 하므로 c를 계산
    const c = p1_x - a * p1_x * p1_x - b * p1_x;

    const calculatedCoefficients = { a, b, c };

    // 이 동적 계수를 기반으로 주요 지점들의 y값을 계산합니다.
    const p1_y = calculateAppliedAttack(
      p1_x,
      bossDefense,
      calculatedCoefficients
    );
    const p2_y = calculateAppliedAttack(
      p2_x,
      bossDefense,
      calculatedCoefficients
    );
    // userAttack도 이 동적 곡선 위에서 y값을 찾습니다.
    const user_y = calculateAppliedAttack(
      userAttack,
      bossDefense,
      calculatedCoefficients
    );
    return {
      coefficients: calculatedCoefficients,
      points: {
        breakpoint1: { x: p1_x, y: p1_y },
        breakpoint2: { x: p2_x, y: p2_y },
        user: { x: userAttack, y: user_y },
      },
    };
  }, [bossDefense, userAttack]); // bossDefense가 바뀌면 곡선 전체가 다시 계산됨

  // 3. 차트 데이터를 생성합니다.
  const chartData = useMemo(() => {
    const data: ChartData[] = [];
    const maxAttack =
      Math.max(points.breakpoint2.x, userAttack) + CHART_X_AXIS_EXTENSION;

    for (let x = 0; x <= maxAttack; x += CHART_DATA_INTERVAL) {
      // 위에서 계산한 '동적' 계수(coefficients)를 사용합니다.
      const y = calculateAppliedAttack(x, bossDefense, coefficients);
      data.push({ characterAttack: x, appliedAttack: y });
    }
    return data;
  }, [bossDefense, userAttack, coefficients, points]);

  // --- JSX (이하 렌더링 로직은 원본과 동일) ---

  const POINT_COLORS = {
    breakpoint1: '#FFC107',
    breakpoint2: '#E53935',
    user: '#2196F3',
  };

  const LegendItem = ({
    color,
    label,
    valueX,
    valueY,
  }: {
    color: string;
    label: string;
    valueX: number;
    valueY: number;
  }) => (
    <div className="flex items-center justify-end gap-2.5">
      <div className="h-1 w-5" style={{ backgroundColor: color }} />
      <span>
        {label} ({formatNumber(valueX)})
      </span>
      <span
        className="min-w-[60px] text-left font-bold"
        style={{ color: color }}
      >
        {formatNumber(valueY)}
      </span>
    </div>
  );

  const ChartReferencePoint = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => (
    <>
      <ReferenceLine
        segment={[
          { x, y: 0 },
          { x, y },
        ]}
        stroke={color}
        strokeDasharray="3 3"
      />
      <ReferenceLine
        segment={[
          { x: 0, y },
          { x, y },
        ]}
        stroke={color}
        strokeDasharray="3 3"
      />
      <ReferenceDot
        x={x}
        y={y}
        r={5}
        fill={color}
        stroke="#181A1B"
        strokeWidth={2}
      />
    </>
  );

  return (
    <div className="h-[550px] w-full rounded-lg bg-[#181A1B] p-5 font-sans text-gray-300">
      <h3 className="mb-2.5 text-center text-lg font-semibold">
        적용 공격력 그래프
      </h3>
      <div className="text-center text-sm">
        (보스 방어력 {formatNumber(bossDefense)} 기준)
      </div>

      <div className="h-[calc(100%-120px)] w-full">
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 30, bottom: 20 }}
          >
            <CartesianGrid stroke="#333" />
            <XAxis
              dataKey="characterAttack"
              type="number"
              domain={[0, 'dataMax']}
              allowDataOverflow={true}
              tick={{ fill: '#aaa', fontSize: 12 }}
              stroke="#555"
              tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            >
              <Label
                value="캐릭터 공격력"
                position="insideBottom"
                offset={-15}
                fill="#ccc"
              />
            </XAxis>
            <YAxis
              dataKey="appliedAttack"
              type="number"
              domain={[0, (dataMax: number) => Math.round(dataMax * 1.2)]}
              tick={{ fill: '#aaa', fontSize: 12 }}
              stroke="#555"
              tickFormatter={(value) => formatNumber(value)}
            >
              <Label
                value="적용 공격력"
                angle={-90}
                position="insideLeft"
                offset={-20}
                fill="#ccc"
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            <Tooltip
              cursor={{
                stroke: '#999',
                strokeWidth: 1,
                strokeDasharray: '3 3',
              }}
              contentStyle={{
                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                border: '1px solid #555',
                color: '#eee',
              }}
              labelStyle={{ color: '#fff', fontWeight: 'bold' }}
              formatter={(value: number, name) => [
                formatNumber(value),
                name === 'appliedAttack' ? '적용 공격력' : '보유 공격력',
              ]}
              labelFormatter={(label) => `보유 공격력: ${formatNumber(label)}`}
            />
            <Line
              type="monotone"
              dataKey="appliedAttack"
              stroke="white"
              strokeWidth={2}
              dot={false}
            />

            {/* --- 참조점 렌더링 --- */}
            <ChartReferencePoint
              x={points.breakpoint1.x}
              y={points.breakpoint1.y}
              color={POINT_COLORS.breakpoint1}
            />
            <ChartReferencePoint
              x={points.breakpoint2.x}
              y={points.breakpoint2.y}
              color={POINT_COLORS.breakpoint2}
            />
            {userAttack > 0 && (
              <ChartReferencePoint
                x={points.user.x}
                y={points.user.y}
                color={POINT_COLORS.user}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="pr-[30px] pt-2.5 text-sm">
        <LegendItem
          color={POINT_COLORS.breakpoint1}
          label="변곡점1"
          valueX={points.breakpoint1.x}
          valueY={points.breakpoint1.y}
        />
        <LegendItem
          color={POINT_COLORS.user}
          label="적용 공격력"
          valueX={points.user.x}
          valueY={points.user.y}
        />
        <LegendItem
          color={POINT_COLORS.breakpoint2}
          label="변곡점2"
          valueX={points.breakpoint2.x}
          valueY={points.breakpoint2.y}
        />
      </div>
    </div>
  );
};

export default AttackPowerChart;
