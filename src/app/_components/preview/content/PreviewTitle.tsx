import Row from '../../layout/Row';
import BeforeAndAfter from '../../common/beforeAndAfter/BeforeAndAfter';

const PreviewTitle = () => {
  return (
    <Row className="mt-1 h-12 gap-1 border-b border-borderColor sm:gap-2">
      <BeforeAndAfter className="w-20 justify-start sm:justify-center">
        <BeforeAndAfter.Title className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
          아이템
        </BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="w-5 sm:w-7">
        <BeforeAndAfter.Title className=""></BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>정령합성</BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>접두</BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>접미</BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
};

export default PreviewTitle;
// import BeforeAndAfter from "../common/beforeAndAfter/BeforeAndAfter";
// import Row from "../layout/Row";

// const PreviewHeader = () => {
//   return (
//     <Row className="mt-1 h-12 gap-2 border-b border-borderColor p-2">
//       {/* <Row className="h-12 gap-2 rounded-lg border border-borderColor p-2 text-white"> */}
//       <BeforeAndAfter className="w-10 justify-start sm:w-28 sm:justify-center md:w-36 lg:w-40">
//         <BeforeAndAfter.Title className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
//           아이템
//         </BeforeAndAfter.Title>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         <BeforeAndAfter.Title>정령합성</BeforeAndAfter.Title>
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex items-center justify-center">
//             기존
//           </BeforeAndAfter.Before>
//           <BeforeAndAfter.After>변경</BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         <BeforeAndAfter.Title>접두</BeforeAndAfter.Title>
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex items-center justify-center">
//             기존
//           </BeforeAndAfter.Before>
//           <BeforeAndAfter.After>변경</BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         <BeforeAndAfter.Title>접미</BeforeAndAfter.Title>
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex items-center justify-center">
//             기존
//           </BeforeAndAfter.Before>
//           <BeforeAndAfter.After>변경</BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>
//     </Row>
//   );
// };

// export default PreviewHeader;
