// import { ApiResponse,ErrorResponse } from "@/types/api";
// import { useCallback, useState } from "react";

// interface ApiState<T> {
//     data:T|null
//     error:ErrorResponse<T>|null
// }

// export function useApi<T>(apiFunc: (...args: unknown[]) => Promise<ApiResponse<T>>) {
//     const [state, setState] = useState<ApiState<T>>({
//       data: null,
//       error: null,
//     });
  
//     const execute = useCallback(async (...args: unknown[]) => {
//       setState({ data: null, error: null });
//       try {
//         const response = await apiFunc(...args);
//         if (response.code === 200) {
//             setState({ data: response.data, error: null });
//         } else {
//             setState({ data: null, error:  response.error);
//         }
//         return response;
//       } catch (error) {
//         setState({
//           data: null,
//           error: { code: 500, status: "INTERNAL_SERVER_ERROR", errors: error.Errors },
//         });
//         throw error;
//       }
//     }, [apiFunc]);
  
//     return { ...state, execute };
//   }
