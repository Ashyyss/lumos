fun main() {
    println("Digite um número inteiro: ")
    val numero = readLine()?.toIntOrNull()

    if (numero != null) {
        if (numero % 2 == 0) {
            println("$numero é um número par.")
        } else {
            println("$numero é um número ímpar.")
        }
    } else {
        println("Número inválido. Por favor, digite um número inteiro.")
    }
}