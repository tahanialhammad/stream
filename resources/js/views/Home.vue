<template>
    <div class="container">
        <div class="column">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                         <p>{{ status.user.name }} Sade that ...</p>
                         <!-- <p>{{ postedOn(status) }}</p> or -->
                          <!--OR THIS usefel in filter, we can add more than one filter -->
                         <p>{{ status.created_at | ago | capitalize }}</p>
                        </div>
                    <div class="message-body" v-text="status.body"></div>
                </div>
                <!-- add to stream form -->
                <!-- the parent is this home and thay listen to event complated from child component then addstatus method-->
                <!-- this listen to event completed and then do method addStatus -->
                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status';
import AddToStream from '../components/AddToStream.vue';
    export default {
        components:{AddToStream},
        data(){
            return{
                statuses: []
            }
        },
        filters:{
            ago(date){
                 return moment(date).fromNow();
            },
            capitalize(value){
                return value.toUpperCase();
            }
        },
        created() {
            //ajax request to a server
            // axios.get('/statuses')
            // .then(({data}) => this.statuses = data);

            Status.all()
            .then(({data}) => this.statuses = data);
            //or
            // Status.all(statuses => this.statuses = statuses);
        },
         methods:{
             addStatus(status){
                 this.statuses.unshift(status); //update array in data from top unshfit
                 alert('Your status has been added to the stream ');
                 window.scrollTo(0, 0); //scroll back to the top
             }
         }
        // methods:{
        //     postedOn(status){
        //         return moment(status.created_at).fromNow();
        //     }
        // }
    }
</script>
