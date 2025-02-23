'use client';

import { useState, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';
import axios from '../utils/axiosInstance';
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import { toast } from 'react-toastify';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { email, password });
      localStorage.setItem('token', response.data.token.split(' ')[1]);
      setUser(response.data);
      toast.success('Вы успешно вошли в систему!', {
        position: "top-right",
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error', error);
      toast.error('Неправильная почта или пароль', {
        position: "top-right",
      });
    }
  };

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.style.backgroundImage = 'url(/img/bg2.png)';
    }
  }, []);

  return (
    <div className='w-full'>
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden w-[90%] border rounded-lg shadow-lg mx-auto mt-10">
          <div className="layout-container flex h-full grow flex-col">
            <div className='flex items-center justify-between'>
              <Link href="/" className='flex items-center hover:border-b hover:border-black w-[10%] mx-3 my-2'>
                <IoIosArrowRoundBack size={32} />
                <p>На Главную</p>
              </Link> 
              <Link href="/register" className='flex items-center w-[15%] mx-5 my-3'>
                <p className='font-semibold border-2 rounded-xl px-3 py-2 border-[#19e619]'>Зарегистрироваться</p>
              </Link> 
            </div>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                  <div ref={divRef} className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px] border rounded-lg" ></div>
                </div>
              </div>
                <h1 className="text-[#273f27] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">С Возвращением!</h1>
                <p className="text-[#273f27] text-base font-normal leading-normal pb-3 pt-1 px-4">Введите свою почту и пароль для продолжения.</p>
                <form onSubmit={handleLogin}>
                  <div className='py-5 ml-4'>
                    <div>
                      <p className='text-lg font-semibold text-[#273f27]'>Почта *</p>
                      <input onChange={(e) => setEmail(e.target.value)} value={email} className='mt-3 p-3 border border-[#273f27] rounded-lg w-[50%]' type="email" placeholder='assan@example.com' required />
                    </div>
                    <div>
                      <p className='text-lg font-semibold text-[#273f27] pt-10'>Пароль *</p>
                      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='assan123' className='mt-3 p-3 border border-[#273f27] rounded-lg w-[50%]' required/>
                    </div>
                    <div className='flex items-center space-x-1 mt-4'>
                      <p>Нету аккаунта?</p>
                      <button className='hover:border-b hover:border-[#273f27]' onClick={() => router.push('/register')}>Создайте его!</button>
                    </div>
                  </div>
                  <div className="flex px-4 py-3">
                    <button type="submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#19e619] text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Войти</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form> */}
      
    </div>
  );
}

export default LoginPage;
