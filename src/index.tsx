import { ViteReactSSG } from "vite-react-ssg/single-page";

export const createRoot = ViteReactSSG(
  <>
    <p className="text-red-500">Hello world</p>

    <p>Another one</p>
  </>,
);
