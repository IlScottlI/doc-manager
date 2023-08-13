<template lang="pug">
#app.section
        form-json(
            :btnReset="{ value: 'Reset' }",
            :btnSubmit="{ value: 'Submit' }",
            :camelizePayloadKeys="true",
            :formFields="jsonFields",
            formName="userProfil"
        )
</template>
    
<script>
// import 'bulma/css/bulma.min.css'
import '@/form.css'
import formJson from "vue-form-json";
import jsonFields from "@/assets/fields";

export default {
    name: "VueForm",
    components: {
        formJson,
    },
    mounted() {
        this.$root.$on("formSubmitted", (values) => console.log(JSON.stringify(values)));
    },
    computed: {
        jsonFields: () => jsonFields,
    },
};
</script>
    
<style>
[type="reset"] {
    display: none;
}
</style>