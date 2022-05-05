const code = `
int linearSearch(int a[], int n, int ele){

    for(int i=0 ; i<n ; i++){
        if(a[i] == ele){
            return i;
        }
    }

    return -1;
}
`

export default code
