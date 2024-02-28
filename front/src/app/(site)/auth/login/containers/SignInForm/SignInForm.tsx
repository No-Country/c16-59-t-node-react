import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Soy:', role);
    console.log('Recordar mis datos:', rememberMe);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white rounded px-2 pt-6 pb-4 mb-4">
        <div className="mb-6 text-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">Soy</label>
          <div className="flex items-center justify-center mb-4">
            <label className="mr-4 cursor-pointer relative rounded-full overflow-hidden shadow flex items-center justify-center">
              <input
                type="radio"
                value="buyer"
                checked={role === 'buyer'}
                onChange={() => setRole('buyer')}
                style={{ display: 'none' }}
              />
              <img src="https://s3-alpha-sig.figma.com/img/783d/cc8a/bc3644d4d07d1e8379fd56301df96b52?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noAERZsN6rUMtndwTwm3Jx5bgaSlodXaBNqZTsScjSCI31SAMWWwzVQPrXR4RUFkaD5IwnHR-lgYGaQpyvPLtKBkKDxlAYRf6kxKvNvUvFsi2DEEUYmHYcerdWXJPJIJsAtnUdIaGmySExVBy-4uf9BMxqzdGiwOIC1Gbpm4W13JQV1Xqhco754kcVICUUCFazmBURgIlvB6eMJJRijmaVL~tIf1wCAALbKUlpSB4Q8pTGeBdZZUdmQg1EFFpsE297omlgdmgattfDsWttXFNHWkd1MVc9u2ebq3e2lodT76T2tXqrbmyWggJ6rcGi6egro~plNXXZLj6DUTkBCozA__" alt="Comprador" className="w-32 h-32" />
              {role === 'buyer' && (
                <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </label>
            <p className="font-bold mt-[12rem]">Comprador</p>
            <label className="cursor-pointer relative rounded-full overflow-hidden shadow flex items-center justify-center">
              <input
                type="radio"
                value="seller"
                checked={role === 'seller'}
                onChange={() => setRole('seller')}
                style={{ display: 'none' }}
              />
              <img src="https://s3-alpha-sig.figma.com/img/e326/494a/d5c4c5b6a57909f81bf7fc299a029788?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=opSF~Kvba1fuq7Ofq9IjaWxvxgZ9E88FcOC84ojlJYSZfIKml6E41pqFWoJtpeGB~q1rGVxbbCoCGRObhq68J9UKrUtDdBNt-CB4xo5LGmfa3JnqSYKbELLfFIaZjWBRPhsz0SSBX0pTF1ZKh1evksfO5ZYGmGrV4sFCdiO96rbWxUVhtRHnV0-nprSg7JWojPomoD5XqRjOLvGakQdpEtpkwxgiBtPIc6BjjeMg9EIjAAW-7Pe5y1TVNt-oe-VF3q-K7E~2oX0xXbGvVk0Uim8UH62wWovknTkPE-sdpQPdi8cqOGyzI-7c1q59nWRQ~huY1Nm3cXc28Di1ka4ibg__" alt="Vendedor" className="w-32 h-32" />
              {role === 'seller' && (
                <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </label>
            <p className="font-bold mt-[12rem]">Vendedor</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="comprador123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="text-sm text-blue-500 hover:text-blue-800" href="#" style={{ float: 'right' }}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="mb-6">
          <input
            className="mr-2 leading-tight"
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="text-sm" htmlFor="rememberMe">
            Recordar mis datos
          </label>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
        <div className="text-center">
        <p className="text-gray-600 mb-2">¿No tienes cuenta?</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Crear Cuenta
        </button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
