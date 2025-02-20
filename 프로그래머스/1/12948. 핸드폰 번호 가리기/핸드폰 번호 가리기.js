function solution(phone_number) {
    let new_number = "*".repeat(phone_number.length-4) + phone_number.slice(phone_number.length-4);

    return new_number;
}