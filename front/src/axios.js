import axios from "axios";

const url = 'http://localhost:8000/api/v2/'
const request = axios.create({
    baseURL: url
})


let api = {
    async check_only_error(data) {
        let result
        if (data === 404) {
            await this.$router.push({path: '/error'})
        } else if (data === 500) {
            await this.$router.push({path: '/error'})
        } else {
            result = data
        }
        return result
    },

    async check_error_404(data) {
        let result
        if (data === 404) {
            await this.$router.push({path: '/error'})
        } else if (data === 500) {
            await this.$router.push({path: '/error'})
        } else {
            result = data
        }
        return result
    },

    async get_signup(id) {
       let result
       let status_code = 200
       let response = await request.get(url + 'signup-by-pk/' + id).catch(error => {
           if (error.response.status === 404){
               status_code = 404
           }
           else {
               status_code = 500
           }
       })
       if (status_code === 200){
           result = response.data
       }
       else if (status_code === 404){
           result = 404
       }
       else {
           result = 500
       }
       return result
   },

   async list_services() {
       let result
       let status_code = 200
       let response = await request.get(url + 'services-list').catch(error => {
           if (error.response.status === 404){
               status_code = 404
           }
           else {
               status_code = 500
           }
       })
       if (status_code === 200){
           result = response.data
       }
       else if (status_code === 404){
           result = 404
       }
       else {
           result = 500
       }
       return result
   },

   async list_personal() {
       let result
       let status_code = 200
       let response = await request.get(url + 'personal-list').catch(error => {
           if (error.response.status === 404){
               status_code = 404
           }
           else {
               status_code = 500
           }
       })
       if (status_code === 200){
           result = response.data
       }
       else if (status_code === 404){
           result = 404
       }
       else {
           result = 500
       }
       console.log(result)
       return result
   },

   async list_offices() {
       let result
       let status_code = 200
       let response = await request.get(url + 'offices-list').catch(error => {
           if (error.response.status === 404){
               status_code = 404
           }
           else {
               status_code = 500
           }
       })
       if (status_code === 200){
           result = response.data
       }
       else if (status_code === 404){
           result = 404
       }
       else {
           result = 500
       }
       return result
   },

   async set_signup(name, service, master, datetime, office) {
       let result
       let status_code = 200
       let response = await request.post(url + 'create-signup', {
           FIO: name,
           service: service,
           master: master,
           time: datetime,
           branch_office: office
       }).catch(error => {
           if (error.response.status === 404){
               status_code = 404
           }
           else {
               status_code = 500
           }
       })
       if (status_code === 200){
           result = response.data
       }
       else if (status_code === 404){
           result = 404
       }
       else {
           result = 500
       }
       return result
   }
}


export default api