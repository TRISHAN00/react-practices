import useFormInput from '../hooks/useFormInput';

export default function FormCom() {
  const firstNameProps = useFormInput('Mary')
  const lastNameProps = useFormInput('Poppins');


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          First name:
        </label>
        <input
          {...firstNameProps}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Last name:
        </label>
        <input
          {...lastNameProps}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p className="text-lg font-medium text-gray-800">
        <b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b>
      </p>
    </div>
  );
}
