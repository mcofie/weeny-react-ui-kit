// @ts-ignore
interface IAlert {
  title: string;
  message: string;
  type: AlertTypes;
}

export enum AlertTypes {
  SUCCESS,
  FAILED,
  PENDING,
}
