"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setPending(false);
  };

  return (
    <div className="flex h-screen">
      {/* Vídeo do lado esquerdo */}
      <div className="w-1/2 h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/6909829/6909829-uhd_2560_1440_25fps.mp4"
        />
      </div>

      {/* Formulário do lado direito */}
      <div className="w-1/2 bg-[#EBE1EF] flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Campo de Nome/Nickname */}
            <div className="relative mb-4">
              <input
                type="text"
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent"
                disabled={pending}
                placeholder="Name or Nickname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <label className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-600">
                Name or Nickname
              </label>
            </div>

            {/* Campo de Email */}
            <div className="relative mb-4">
              <input
                type="email"
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent"
                disabled={pending}
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <label className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-600">
                Email
              </label>
            </div>

            {/* Campo de Senha */}
            <div className="relative mb-6">
              <input
                type="password"
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent"
                disabled={pending}
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <label className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-600">
                Password
              </label>
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-full font-bold hover:bg-purple-700 transition-all"
              disabled={pending}
            >
              Sign Up
            </button>
          </form>

          {/* Separador */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Botões de Login com Google e GitHub */}
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-full font-bold hover:bg-gray-200 transition-all mb-3">
            <FcGoogle className="text-xl" /> Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-all">
            <FaGithub className="text-xl" /> Sign Up with GitHub
          </button>

          {/* Já tem conta? */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/sign-in" className="text-purple-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}