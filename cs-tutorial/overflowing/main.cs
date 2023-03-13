byte number = 255;

number = number + 1 // 0

// to prevent overlfow, use the check keyword
// This code prevents overflow and an exception will be thrown until you handle the exception
checked
{
  byte number = 255;

  number = number + 1
}
