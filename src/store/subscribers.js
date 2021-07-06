import store from '@/store'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'SET_REGISTRATION' :
            console.log(mutation)
        break;
    }
})
