import ContentContainer from "../placeholders/ContentContainer";

export default function EducationPage() {
  return (
    <>
      <ContentContainer
        customClassName="pointer-events-none absolute z-10 text-accent-1 w-screen h-screen flex flex-col justify-center items-center"
        shouldAnimate={true}
      >

        <div>
          <h1 className="font-codech text-8xl">EDUCATION</h1>
        </div>

      </ContentContainer>
    </>
  );
}
