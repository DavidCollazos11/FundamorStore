import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";

const Home = () => {
  const [copy, setCopy] = useState({ prendaID: true });
  const { required, patternURL } = formValidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setError,
    setValue,
  } = useForm();

  const { loading, data, error, getData, addData, deleteData, updateData } = useFirestore();
  const [newPrendaID, setNewPrendaID] = useState();

  useEffect(() => {
    getData();
  }, []);

  if (loading.getData) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  const onSubmit = async ({ prenda, url }) => {
    console.log (prenda,url)
    let prenda1 = prenda.toString();
    let url1 = url.toString();
    try {
      if (newPrendaID) {
        await updateData(newPrendaID, { prenda: prenda1, urlReferencia: url1 });
        //await updateData(newPrendaID, prenda1, url1);
        setNewPrendaID("");
      } else {
        
        await addData({ prenda: prenda1, urlReferencia: url1 });
        //await addData(prenda1, url1);
      }
      resetField("prenda");
      resetField("url");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    }
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
  };

  const handleClickEdit = (item) => {
    setValue("prenda", item.prenda);
    setValue("url", item.url);
    setNewPrendaID(item.nanoid);
  };

  const pathURL = window.location.href;

  const handleClickCopy = async (nanoid) => {
    await navigator.clipboard.writeText(window.location.href + nanoid);
    setCopy({ [nanoid]: true });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Dona ropa para el Pulguero Fundamor</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="prenda" className="block text-sm font-medium text-gray-700">
            Ingresa el nombre de la prenda
          </label>
          <input
            id="prenda"
            type="text"
            placeholder="Chaqueta deportiva"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("prenda", { required })}
          />
          {errors.prenda && <p className="text-red-500 text-xs">{errors.prenda.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Ingresa la URL de referencia
          </label>
          <input
            id="url"
            type="text"
            placeholder="https://ejemplo.com/chaqueta"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("url", { required, pattern: patternURL })}
          />
          {errors.url && <p className="text-red-500 text-xs">{errors.url.message}</p>}
        </div>

        {newPrendaID ? (
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={loading.updateData}
          >
            {loading.updateData ? "Cargando..." : "EDITAR PRENDA"}
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading.addData}
          >
            {loading.addData ? "Cargando..." : "AGREGAR PRENDA"}
          </button>
        )}
      </form>

      {data.map((item) => (
        <div
          key={item.nanoid}
          className="p-6 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-2"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pathURL}
            {item.nanoid}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.prenda} - <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
          </p>
          <div className="flex space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={() => handleClickDelete(item.nanoid)}
              disabled={loading[item.nanoid]}
            >
              {loading[item.nanoid] ? "Cargando..." : "Eliminar"}
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => handleClickEdit(item)}
            >
              Editar
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => handleClickCopy(item.nanoid)}
            >
              {copy[item.nanoid] ? "Copiado" : "Copiar URL"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
