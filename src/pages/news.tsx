import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";
import "@/styles/globals.css";

const News = () => {

    const data = useAppData();
    
    return (
        <Layout title="News" subtitle="News page">
            <h1>{data.name}</h1>
        </Layout>
    );
};

export default News;