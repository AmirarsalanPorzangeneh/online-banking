import * as yup from "yup";
import {
  isPersian,
  hasPersian,
  toPersianChars,
} from "@persian-tools/persian-tools";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("نام الزامی است")
    .matches(/^[^0-9]+$/, "نام نباید شامل عدد باشد")
    .matches(
      /^[^!@#$%^&*()-_=+~`.<>?/";:]+$/,
      "نام نباید حاوی کاراکتر خاص باشد"
    )
    .test("name", "نام باید با حروف فارسی وارد شود", isPersian),
  lastName: yup
    .string()
    .required("نام خانوادگی الزامی است")
    .matches(/^[^0-9]+$/, "نام خانوادگی نباید شامل عدد باشد")
    .matches(
      /^[^!@#$%^&*()-_=+~`.<>?/";:]+$/,
      "نام خانوادگی نباید حاوی کاراکتر خاص باشد"
    )
    .test("lastname", "نام خانوادگی باید با حروف فارسی وارد شود", isPersian),

  nationalCode: yup
    .string()
    .required("کد ملی را وارد کنید")
    .matches(/^\d{10}$/, "کدملی باید 10 عدد باشد")
    .test("iranian-national-id", "کد ملی معتبر نیست", (value) => {
      if (!value) return false;

      // Convert the input into an array of numbers
      const digits = value.split("").map(Number);

      // Check for repeated digits (e.g., "1111111111" is invalid)
      if (digits.every((digit) => digit === digits[0])) {
        return false;
      }

      const check = digits.pop(); // last digit is the checksum
      const sum = digits.reduce(
        (acc, digit, idx) => acc + digit * (10 - idx),
        0
      );
      const remainder = sum % 11;

      return (
        (remainder < 2 && check === remainder) ||
        (remainder >= 2 && check === 11 - remainder)
      );
    }),

  birthdate: yup
    .date()
    .required("تاریخ تولد را وارد کنید")
    .nullable()
    .max(new Date(), "تاریخ باید در گذشته باشد"),
  email: yup
    .string()
    .email("ایمیل معتبر وارد کتید")
    .required("ایمیل الزامی است"),
  phoneNumber: yup
    .string()
    .required("شماره تلفن الزامی است")
    // .matches(/^\d{11}$/, "شماره تلفن باید حداقل 11 عدد باشد"),
    .matches(/^09\d{9}$/, "شماره تلفن باید 11 رقم و با 09 شروع شود"),
  // username: yup.string().required("یوزر الزامی است"),

  password: yup
    .string()
    .required("رمز الزامی است")
    .min(8, "رمز حداقل باید 8 رقم باشد")
    .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
    .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
    .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
    .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز ها باید یکسان باشند")
    .required("رمز را مجدد وارد کنید"),
});
