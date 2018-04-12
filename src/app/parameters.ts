// Configurations
export const baseURL = "http://127.0.0.1:8000/";
// get ApiURL
export function GetApiurl(path: string) {
    return baseURL + path;
}