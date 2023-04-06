import { useState } from "react";
import { db } from "../../services/config";
import {
	doc,
	setDoc,
	updateDoc,
	getDoc,
	arrayUnion,
} from "firebase/firestore";
import { FormData } from "./types";
import * as S from "./styles";
import Form from "../../components/Form";

const currentDate = new Date()
	.toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
	})
	.replace(/\//g, "-");

const ClockIn = () => {
	const [userCode, setUserCode] = useState<string>("");
	const [userPin, setUserPin] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<string>("Loading...");

	const getCurrentTime = (): void => {
		const currentTime = new Date().toLocaleTimeString("pt-BR", {
			hour12: false,
		});
		setCurrentTime(currentTime);
	};

	setInterval(getCurrentTime, 1000);

	const handleClock = async (userCode: string, userPin: number) => {
		const formData: FormData = {
			code: userCode,
			pin: userPin,
			registers: { [currentDate]: currentTime },
		};

		try {
			const docRef = doc(db, "employees", userCode);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				await updateDoc(docRef, {
					registers: arrayUnion(formData.registers),
				});
			} else {
				await setDoc(docRef, formData);
			}
		} catch (err) {
			console.error("Error adding/updating document: ", err);
		}
	};

	return (
		<S.ClockIn>
			<S.MainContainer>
				<h2>
					{currentDate} - {currentTime}
				</h2>
				<Form
					firstPlaceholder="Employee's code"
					secondPlaceholder="PIN"
					buttonText={"REGISTER"}
					setFirstInput={setUserCode}
					setSecondInput={setUserPin}
					handleFunction={() => handleClock(userCode, userPin)}
				/>

				<div className="span-container">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
						laboriosam harum deleniti architecto quibusdam quae tenetur qui
						aliquid necessitatibus et corporis molestias quia dolorum quo
						perspiciatis quas nam culpa praesentium.
					</span>
				</div>
			</S.MainContainer>
		</S.ClockIn>
	);
};

export default ClockIn;
