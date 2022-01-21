import { ISingData } from "../../utils/MainApi/IMainApi";

export interface ILoginProps {
  handleLogin: (values: ISingData) => void;
}