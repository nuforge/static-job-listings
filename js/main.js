let app = Vue.createApp({
    created () {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => this.jobListings = data)
    },
    data() {
        return {
            jobListings: [],
            filters: ['CSS']
        }
    },
    methods: {
        addToFilters (tag) {
            if(!this.filters.includes(tag)) {
                this.filters.push(tag);
            }
        },        
        removeFromFilters (tag) {
            let index = this.filters.indexOf(tag);
            if (index > -1) {
                this.filters.splice(index, 1);
            }
        }
    }
});

app.mount('#app');