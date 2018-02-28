export class List {
  $key: string;
  course: Array<{
    title: string;
    link: string;
    selection: Array<{
      module: number;
      title: string;
      content: Array<{
        title: string;
        duration: string;
      }>;
    }>;
  }>;
}

// var arr: Array<{id: number, text: string}> = [...];
