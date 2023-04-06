export interface FormData {
	code: string;
	pin: number;
	registers: { [key: string]: string };
}
