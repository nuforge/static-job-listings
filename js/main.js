let app = Vue.createApp({
    created () {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => this.jobListings = data)
    },
    data() {
        return {
            jobListings: [],
            filters: []
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
        },
        clearFilters () {
            this.filters = [];
        }
    },
    computed: {
        filteredList () {
            if (this.filters.length > 0 ) {
                return this.jobListings.filter(job => {
                    let newList = job.languages.concat(job.tools);
                    return (this.filters.every(r => newList.includes(r)));
                });
            } else {
                return this.jobListings;
            }
        }
    }
});

app.mount('#app');