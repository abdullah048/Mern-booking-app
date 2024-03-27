import axios from 'axios';
export default function axiosInterceptors() {
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        if (window.location.pathname !== '/sign-in') {
          localStorage.removeItem('user');
          window.location.href = '/sign-in';
          axios.get(`${import.meta.env.VITE_BASE_URL}/user/sign-out`, {
            withCredentials: true,
          });
        }
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
}
