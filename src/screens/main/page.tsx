import { Layout } from "@/layouts/layout";
import style from "./style.module.css";
export default function Main() {
  return (
    <Layout>
      <div className={style.container}>
        <p>Hello</p>
      </div>
    </Layout>
  );
}
