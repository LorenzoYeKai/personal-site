import MenuLink from "./_components/MenuLink";

export default async function Home() {
  return (
    <main>
      <div className="relative flex h-screen w-full overflow-x-hidden">
        <video
          src={"/videos/starBackground.mp4"}
          muted
          autoPlay
          loop
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-2/3 translate-x-2/3 -skew-x-12 bg-white bg-opacity-50" />
        <div className="relative h-full w-2/3 -translate-x-1/3 -skew-x-12 bg-[#FF0f0f] bg-opacity-90">
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 translate-x-4 transform flex-col items-end">
            <MenuLink link="/" text="HomE" />
            <MenuLink link="/projects" text="ProJeCts" />
            <MenuLink link="/about" text="AbOUt" />
            <MenuLink link="/contacts" text="CoNtaCts" />
          </div>
        </div>
      </div>
    </main>
  );
}
