class Main {
  // メインの中でprintDataを呼び出している
  public static void main(String[] args) {
    printData();
  }
    public static void printData(){
      System.out.println("私の名前はKate Jonesです");
    }
  
}

class Main {
  public static void main(String[] args) {
    printData("Kate Jones");
    printData("John Christopher Smith");
  }
  public static void printData(String name) {
    System.out.println("私の名前は" + name + "です");
    
  }
}


class Main {
  public static void main(String[] args) {
    // それぞれ年齢に関する引数を追加してください
    printData("Kate Jones", 27);
    printData("John Christopher Smith", 65);
  }
  public static void printData(String name, int age) {
    System.out.println("私の名前は" + name + "です");
    System.out.println("年齢は" + age + "歳です");
    
  }
}


class Main {
  public static void main(String[] args) {
    Person person = new Person();
    person.hello();
  }
}

class Person {
  public void hello() {
    System.out.println("こんにちは");
  }
}


class Person {
  public void hello(){
    System.out.println("こんにちは");
  }
  
}

class Main {
  public static void main(String[] args) {
    Person person1 = new Person();
    person1.hello();
    
    Person person2 = new Person();
    person2.hello();
    
  }
}

class Main {
  public static void main(String[] args) {
    Person person1 = new Person();
    person1.hello();
    
    person1.name = "Kate Jones";
    
    System.out.println(person1.name);

    Person person2 = new Person();
    person2.name = "John Christopher Smith";
    
    System.out.println(person2.name);
    

  }
}
class Person {
  public String name;

  public void hello() {
    System.out.println("こんにちは");
  }
}

