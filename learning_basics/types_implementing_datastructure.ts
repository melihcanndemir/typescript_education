// Define a Result type that can either be a success with data or a failure with an error message

type Result<T> = { success: true; data: T } | { success: false; error: string; };

function fetchData(): Result<string> {
    // Simulate fetching data
    const success = Math.random() > 0.5; // Random success or failure

    if (success) {
        return { success: true, data: "Fetched data successfully!" };
    } else {
        return { success: false, error: "Failed to fetch data." };
    }
}

const result = fetchData();

if (result.success) {
    console.log("Data: ", result.data);
} else {
    console.error("Error: ", result.error);
}