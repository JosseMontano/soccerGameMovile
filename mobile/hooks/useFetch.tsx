import { useEffect, useState } from "react";

interface Params {
  id?: string;
  services: (id?: string) => Promise<{ data: any } | undefined>;
}

const Usefetch = <T,>({ services, id }: Params) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLoadData = async () => {
    if (id) {
      const res = await services(id);
      setLoading(false);
      if (res) setData(res.data);
      return
    }
    const res = await services();
    setLoading(false);
    if (res) setData(res.data);
  };

  useEffect(() => {
    handleLoadData();
  }, [services]);

  const showMsgEmpty = () => {
    return <p>No hay datos</p>;
  };

  return {
    data,
    loading,
    showMsgEmpty,
    handleLoadData
  };
};

export default Usefetch;