import { Suspense } from "react";
import Header from "../_components/layout/Header";
import Row from "../_components/layout/Row";
import PreviewSearchBar from "../_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";
import Loading from "../_components/common/Loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-full w-full flex-col justify-center">
        <Header />
        <div className="m-auto my-40 flex w-96 flex-1 cursor-default flex-col gap-4">
          <h1 className="text-center font-sans text-7xl">망디</h1>
          <div className="flex items-center justify-center text-xs">
            <p>마비노기 영웅전 캐릭터를 조회하고 장비를 세팅해보세요</p>
          </div>

          <Row className="flex w-full items-center justify-center">
            <PreviewSearchBar className="w-full" />
          </Row>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
// import { Suspense } from "react";
// import Header from "../_components/layout/Header";
// import Row from "../_components/layout/Row";
// import PreviewSearchBar from "../_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";
// import Loading from "../_components/common/Loading";

// const Home = () => {
//   return (
//     <Suspense fallback={<Loading />}>
//       <div className="flex h-full w-full flex-col justify-center border border-blue-300">
//         <Header />
//         <div className="m-auto my-40 flex w-96 flex-1 cursor-default flex-col gap-4">
//           <h1 className="text-center font-sans text-7xl">망디</h1>
//           <div className="flex items-center justify-center text-xs">
//             <p>마비노기 영웅전 캐릭터를 조회하고 장비를 세팅해보세요</p>
//           </div>

//           <Row className="flex w-full items-center justify-center">
//             <PreviewSearchBar className="w-full" />
//           </Row>
//         </div>
//       </div>
//     </Suspense>
//   );
// };

// export default Home;
