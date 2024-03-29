import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;