import Form from "./components/Form";
import Logo from "./assets/images/logo.svg";

function App() {
  return (
    <main className="flex h-full flex-col gap-10 md:gap-7 xl:mt-[4.25rem] xl:gap-[5.5rem]">
      <h1 className="sr-only">Tip Calculator</h1>
      <div className="flex justify-center pt-12 lg:pt-4 xl:pt-[5.35rem]">
        <img src={Logo} alt="" />
      </div>
      <div className="rounded-t-[1.55rem] bg-white md:rounded-3xl lg:mx-auto lg:max-w-[57.5rem]">
        <Form />
      </div>
    </main>
  );
}

export default App;
