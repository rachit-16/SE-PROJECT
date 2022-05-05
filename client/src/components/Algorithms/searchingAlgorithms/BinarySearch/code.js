const binarySearchCode = `
int binarySearch(int arr[], int n, int ele){

    int left=0, right=n-1;
    
    while(left <= right){
        int mid = left + (right-left)/2;

        if(arr[mid] == ele){
            return mid;
        }
        else if(arr[mid] < ele){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return -1;
}
`

export default binarySearchCode
