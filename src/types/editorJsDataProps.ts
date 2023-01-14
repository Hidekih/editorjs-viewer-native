// Interfaces from EditorJs v2.26.4
// Copy of OutputData
export interface IEditorJsData {
  /**
   * Editor's version
   */
  version?: string;

  /**
   * Timestamp of saving in milliseconds
   */
  time?: number;

  /**
   * Saved Blocks
   */
  blocks: OutputBlockData[];
}

export interface OutputBlockData<
  Type extends string = string,
  Data extends object = any
> {
  /**
   * Unique Id of the block
   */
  id?: string;
  /**
   * Tool type
   */
  type: Type;
  /**
   * Saved Block data
   */
  data: BlockToolData<Data>;

  /**
   * Block Tunes data
   */
  tunes?: { [name: string]: BlockTuneData };
}

export type BlockToolData<T extends object = any> = T;

export type BlockTuneData = any;
