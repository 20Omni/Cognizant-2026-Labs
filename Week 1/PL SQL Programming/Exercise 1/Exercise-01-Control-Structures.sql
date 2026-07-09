SET SERVEROUTPUT ON;

----------------------------------------------------------
-- Scenario 1: Apply 1% Discount for Customers Above 60
----------------------------------------------------------

BEGIN
    FOR c IN (
        SELECT CustomerID,
               FLOOR(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS Age
        FROM Customers
    )
    LOOP
        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;

            DBMS_OUTPUT.PUT_LINE('1% Discount Applied to Customer ID: ' || c.CustomerID);
        END IF;
    END LOOP;

    COMMIT;
END;
/

----------------------------------------------------------
-- Scenario 2: Promote Customers to VIP
----------------------------------------------------------

BEGIN
    FOR c IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF c.Balance > 10000 THEN
            DBMS_OUTPUT.PUT_LINE('Customer ID ' || c.CustomerID || ' promoted to VIP.');
        END IF;
    END LOOP;
END;
/

----------------------------------------------------------
-- Scenario 3: Loan Due Reminder
----------------------------------------------------------

BEGIN
    FOR l IN (
        SELECT LoanID, CustomerID, EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || l.LoanID ||
            ' for Customer ID ' || l.CustomerID ||
            ' is due on ' || TO_CHAR(l.EndDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/