#Simulador de Caixa Eletrônico
#Descrição: Crie um programa que simule um caixa eletrônico. Comece com um saldo inicial de R$ 1000.00. Apresente um menu com as opções: 1 - Ver Saldo, 2 - Sacar, 3 - Depositar.
#Se o usuário escolher sacar, peça o valor e verifique se ele tem saldo suficiente. Se tiver, atualize o saldo e informe o sucesso da operação. Senão, informe "Saldo insuficiente.".
#Se escolher depositar, peça o valor e adicione ao saldo.
#Se escolher ver saldo, apenas exiba o saldo atual formatado.
#Se a opção for inválida, exiba "Opção inválida.".

saldo = 1000

print("===== menu =====")
print("1 \tVer Saldo\n2\  \tSacar\n3  \tDepositar")
print(" ================= ")
opcao = int(input("Digite a opção desejada: opção 01 = limite 1000 "))

if opcao == 2
  valorsaque = float(input("Digite o valor do saque: R$")
   if valorsaque <= saldo:
   saldo = saldo -valorSaque
   print("Operação realizada com sucesso!")
   print(f"saldo atual: R${saldo:.2f}")
   else:
        print("Saldo insuficiente")
        elif opcao == 3
        valordeposito = float(input("Informe o valor de deposito: R$"))
        saldo = saldo + valordeposito
        print(f"Saldo atualizado: R${saldo:.2f}")
        elif opcao == 1:
        print(f"saldo: R${}")
        else(print "opcao invalida!")




