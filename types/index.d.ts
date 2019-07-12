export default interface Struct {
  validate(): {
    valid: boolean;
    typeError: string;
    msg: string;
  };
}
