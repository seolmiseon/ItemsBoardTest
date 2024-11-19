// TODO: 비밀번호 재설정 로직 필요 시 복구
// import { gql, useMutation } from "@apollo/client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const RESET_PASSWORD_MUTATION = gql`
//   mutation ResetUserPassword($password: String!) {
//     resetUserPassword(password: $password)
//   }
// `;

// const ResetPassword: React.FC = () => {
//     const router = useRouter();
//     const { token } = router.query;
//   const [password, setPassword] = useState("");
//   const [resetUserPassword, { data, loading, error }] = useMutation(RESET_PASSWORD_MUTATION);

//   const handleSubmit = async () => {
//     try {
//       const response = await resetUserPassword({
//         variables: { password },
//       });

//       if (response.data.resetUserPassword) {
//           alert("비밀번호가 성공적으로 재설정되었습니다!");
//           router.push('/signIn');
//       } else {
//         alert("비밀번호 재설정에 실패했습니다.");
//       }
//     } catch (err) {
//       console.error("Error resetting password:", err);
//     }
//   };

//   return (
//     <div>
//       <h1>비밀번호 재설정</h1>
//       <input
//         type="password"
//         placeholder="새 비밀번호"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? "로딩 중..." : "비밀번호 재설정"}
//       </button>
//       {error && <p>에러 발생: {error.message}</p>}
//     </div>
//   );
// };

// export default ResetPassword;
