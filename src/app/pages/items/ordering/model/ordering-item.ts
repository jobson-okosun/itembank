export class Options{
  label:string;
  value:number;
}

export class OrderingItem {
  reference: string;
  stimulus: string;
  options: Options[] = [];
  shuffleOptions: boolean = false;
}
