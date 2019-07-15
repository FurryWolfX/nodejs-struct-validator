export default interface Struct {
  validate(obj: any): {
    valid: boolean;
    typeError: string;
    msg: string;
  };
}
