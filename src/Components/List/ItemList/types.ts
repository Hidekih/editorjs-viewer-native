import { ListData } from "../types";

export type ItemListProps = {
    value: string;
    index: number;
    width?: number;
    style: ListData["style"];
}