<template lang="pug">
#app.section
    form-json(
        :btnReset="{ value: 'Close' , class: 'button is-pulled-right mt-4 me-4', style: {display: 'none'}}",
        :btnSubmit="{ value: 'Save and Close' , class: 'button is-info mt-4'}",
        :camelizePayloadKeys="true",
        :formFields="formFields",
        :mandatoryAsteriskLegend="mandatoryAsteriskLegend",
        :formName="formName",
    )
        
</template>
    
<script>
import '@/form.css'
import formJson from "vue-form-json";
import jsonFields from "@/assets/TA010.json";

export default {

    name: "VueForm",

    components: {
        formJson,
    },

    data: () => ({
        keys: null,
        item: null,
        formName: 'document',
        mandatoryAsteriskLegend: '',
        formFields: jsonFields,
    }),

    mounted() {
        this.$root.$on("formSubmitted", (values) => {
            this.keys = Object.keys(values.values);
            console.log(this.keys, values.values);
            window.localStorage.setItem('formFields',JSON.stringify(this.jsonFields) );
            window.localStorage.setItem('formFieldsRes',JSON.stringify(values.values) );
        });
        let formFields = window.localStorage.getItem('formFields');
        if(formFields == null){
            window.localStorage.setItem('formFields',JSON.stringify(this.jsonFields) )
        } else {
            this.formFields = JSON.parse(window.localStorage.getItem('formFields'));
        }
        console.log(this.formFields);
        console.log(formFields);
    },

    computed: {
        jsonFields: () => jsonFields,
    },

    methods: {
        handleChange: (e) => {
            console.log(e);
        }
    },

    watch: {
        formFields(e) {
            console.log(e);
        }
    },
};
</script>

<style>
div:has([type="reset"]) {
    justify-content: flex-end !important;
}
</style>