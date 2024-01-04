import Image from "next/image";
import App from "./App";
import { Providers } from "./Providers";

export default function Home() {
  return (
    <main>
      <Providers>
        <App></App>
      </Providers>
    </main>
  );
}
