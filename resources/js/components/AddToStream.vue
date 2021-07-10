<template>
<div>
  <div class="message">
  <div class="message-header">
      Push to the stream
  </div>
    <div class="message-body">
        <!-- enable buttoun when we writing keydown or keyup ==clear error-->
        <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
            <p class="control">
                <textarea class="textarea" placeholder="I have som thig to say..." v-model="form.body"></textarea>
                <!-- if error in form body then disply danger text ...we leren thant in oop -->
                <span class="help is-danger"
                 v-if="form.errors.has('body')"
                 v-text="form.errors.get('body')"></span>

            </p>
            <p class="control">
                <!-- disable button wehen error  -->
                <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
            </p>
        </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            form: new Form({ body: '' })
        }
    },
    methods:{
        onSubmit(){
            //submit an ajax request to the server
            // this.form.post('/statuses').then(status => alert('All doen!!'));
            this.form.post('/statuses')
            .then(status => this.$emit('completed', status)); //emit een event

        }
    }
}
</script>

