import { useState, type ChangeEvent, type FormEvent } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  console.log("estado do formulário: ", form);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const currentFormName = e.target.name;
    setForm((prev) => ({ ...prev, [currentFormName]: value }));
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded-sm shadow-black shadow-md gap-4 hover:shadow-sm transition-shadow duration-200 flex flex-col"
      >
        <div className="flex flex-col">
          <label>E-mail:</label>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            className="border-black border-1 border-solid rounded-sm "
          />
        </div>
        <div className="flex flex-col">
          <label>Senha:</label>
          <input
            onChange={handleChange}
            type="text"
            id="password"
            name="password"
            className="border-black border-1 border-solid rounded-sm "
          />
        </div>
        <button className="cursor-pointer pt-0.5 pb-0.5 w-1/1 bg-[#4169e1] text-white">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
