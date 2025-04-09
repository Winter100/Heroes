interface TermsGuideProsp {
  title: string;
  data: {
    section: number;
    title: string;
    list: {
      content: string;
    }[];
  }[];
}
[];

const TermsGuide = ({ title, data }: TermsGuideProsp) => {
  return (
    <div className="mx-auto max-w-5xl p-12 font-sans">
      <div className="pb-16 text-center text-2xl">
        <h1>{title}</h1>
      </div>
      <ul>
        {data?.map((item) => (
          <li key={item.title}>
            <section className="pb-8">
              <h2>{item.title}</h2>
              <ul className="pl-2 text-sm">
                {item.list.map((list) => (
                  <li key={list.content}>{list.content}</li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsGuide;
