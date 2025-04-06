import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ImageLightbox = ({ images, visible, index, setVisible, setIndex }) => {
  return (
    <PhotoSlider
      images={images.map((item) => ({ src: item, key: item }))}
      visible={visible}
      onClose={() => setVisible(false)}
      index={index}
      onIndexChange={setIndex}
    />
  );
};

export default ImageLightbox;
