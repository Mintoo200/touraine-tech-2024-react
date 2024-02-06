import rawData from "../assets/data.json";
import './CatImage.css'
export default function CatImage({ entry, ...props }) {
    const basepath = rawData.meta.basepath
    const { id } = entry;

    return (
        <img src={`${basepath}/${id}`} {...props} />
    )
}
