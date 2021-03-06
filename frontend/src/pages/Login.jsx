import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);
    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
    };
    return (
        <div className="max-w-full h-screen bg-trueGray-300">
            <div className="flex justify-center items-center w-full h-full p-3">
                <div className="container md:w-4/5 h-4/5 flex justify-center items-center bg-white rounded-2xl elevation-16">
                    <div className="hidden lg:flex justify-center items-center w-1/2 h-full rounded-tl-2xl rounded-bl-2xl bg-cyan-600">
                        <div className="flex justify-center items-center w-1/3 h-1/3 lg:w-2/3 lg:h-2/3 rounded-2xl nm-inset-white">
                            <svg className="w-full h-full" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" className="ccustom" fill="#442781">
                                </path>
                                <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" className="ccompli1" fill="#61459C">
                                </path>
                                <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" className="ccompli2" fill="#A992DB">
                                </path>
                                <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" className="ccustom" fill="#FF7917">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center sm:w-full lg:w-1/2 h-full">
                        <div className="flex flex-col justify-between items-center w-full h-full py-4 sm:w-1/3 sm:h-1/3 lg:w-2/3 lg:h-2/3 rounded-2xl lg:nm-flat-white">
                            <p className="font-bold lg:text-xl">Sistema Gestor Monetario</p>
                            <div className="w-full flex justify-center">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex items-center space-x-1 lg:space-x-2 py-2">
                                        <span className="text-cyan-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="email" name="userMail" id="userMail" placeholder="Email" {...register("userMail", { required: {value: true, message: "Correo requerido"} })} className="px-3 rounded bg-trueGray-100 focus:outline-none focus:bg-white focus:ring focus:ring-blue-300" />
                                    </div>
                                    {errors.userMail && (
                                        <p className="text-xs text-red-500 px-8">{errors.userMail.message}</p>
                                    )}
                                    <div className="relative flex items-center space-x-1 lg:space-x-2 py-2">
                                        <span className="text-cyan-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type={showPass ? "text" : "password"} name="userPass" id="userPass" placeholder="Password" {...register("userPass", { required: { value: true, message: "Contrase??a incorrecta" }, minLength: 6, maxLength: 18 })} className="px-3 rounded bg-trueGray-100 focus:outline-none focus:bg-white focus:ring focus:ring-blue-300" />
                                        <span onClick={() => setShowPass(!showPass)} className="absolute right-0 text-gray-700">
                                            {showPass ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                                                    </path>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                    </path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                    </path>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                    {errors.userPass && (
                                        <p className="text-xs text-red-500 px-8">{errors.userPass.message}</p>
                                    )}
                                    <div className="flex items-center py-2">
                                        <button type="submit" className="text-white w-full rounded-full bg-emerald-500 hover:bg-emerald-600">Ingresar</button>
                                    </div>
                                </form>
                            </div>
                            <p className="text-sm font-extralight">&copy; Bluumoon 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;