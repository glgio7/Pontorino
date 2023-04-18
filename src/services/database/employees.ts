import { FormData } from "../actions/types";
import { db } from "../config";
import { doc, collection, getDoc, getDocs, setDoc } from "firebase/firestore";

export const verifyEmployees = async (userCode: string) => {
	try {
		const docRef = doc(db, "employees", userCode);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.error("Error adding/updating document: ", err);
	}
};

export const getEmployees = async () => {
	const querySnapshot = await getDocs(collection(db, "employees"));
	const employeesArr = querySnapshot.docs.map((doc) => {
		return doc.data();
	});
	return employeesArr;
};

export const addEmployee = async (
	name: string,
	employer: string,
	userCode: string,
	userPin: string
) => {
	const employeeData: FormData = {
		name: name,
		employer: employer,
		code: userCode,
		pin: userPin,
		registers: {},
	};

	try {
		// Verifica se o funcionário já existe
		const employeeCode = employeeData.code;
		const employeeExists = await verifyEmployees(employeeCode);
		if (employeeExists) {
			alert("Employee already exists");
			return;
		}

		// Adiciona o funcionário à coleção "employees"
		const docRef = doc(db, "employees", employeeCode);
		await setDoc(docRef, employeeData);

		alert("Employee added successfully");
	} catch (err) {
		console.error("Error adding employee: ", err);
	}
};
